import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()

const supabaseUrl = config.public.supabaseUrl as string
const supabaseAnonKey = config.public.supabaseAnonKey as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
