CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE id = user_id
    AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE SET search_path = public;

DROP POLICY IF EXISTS "Profiles selectable by owner and admin" ON public.profiles;
DROP POLICY IF EXISTS "Profiles updateable by admin" ON public.profiles;
DROP POLICY IF EXISTS "Products manageable by admin" ON public.products;
DROP POLICY IF EXISTS "Orders owner or admin read/write" ON public.orders;
DROP POLICY IF EXISTS "Order items follow parent order" ON public.order_items;

CREATE POLICY "Profiles selectable by owner and admin" ON public.profiles
  FOR SELECT USING (auth.uid() = id OR public.is_admin(auth.uid()));

CREATE POLICY "Profiles updateable by admin" ON public.profiles
  FOR UPDATE USING (public.is_admin(auth.uid()));

CREATE POLICY "Products manageable by admin" ON public.products
  FOR ALL USING (public.is_admin(auth.uid()))
  WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Orders owner or admin read/write" ON public.orders
  FOR ALL USING (auth.uid() = user_id OR public.is_admin(auth.uid()))
  WITH CHECK (auth.uid() = user_id OR public.is_admin(auth.uid()));

CREATE POLICY "Order items follow parent order" ON public.order_items
  FOR ALL USING (
    EXISTS (
      SELECT 1
      FROM public.orders
      WHERE orders.id = order_items.order_id
      AND (orders.user_id = auth.uid() OR public.is_admin(auth.uid()))
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.orders
      WHERE orders.id = order_items.order_id
      AND (orders.user_id = auth.uid() OR public.is_admin(auth.uid()))
    )
  );
