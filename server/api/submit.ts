import { supabase } from "~/server/lib/supabase";
import { sendEmail } from '~/server/utils/email';

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const { data, error } = await supabase
        .from('invites')
        .insert([{
            email: body.email,
            first_name: body.prenom,
            last_name: body.nom,
            phone: body.telephone,
        }])

    await sendEmail(body.email)

    if (error) {
        return { success: false, error }
    }

    return { success: true, data }
});