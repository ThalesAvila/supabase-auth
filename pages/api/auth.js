import { supabase } from "../../supabase-client";

export default function handler(req, res) {
  supabase.auth.setAuthCookie(req, res);
}
