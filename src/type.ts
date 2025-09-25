import z from "zod";

export const formSchema = z.object({
    name: z.string().nonempty('Nama harus diisi'),
    family: z.string().nonempty('Nama keluarga wajib diisi'),
    absen: z.enum(['Hadir', 'Tidak Hadir'], {
        message: 'Kehadiran wajib diisi'
    }),
    wish: z.string().optional(),
}) 

export type FormSchema = z.infer<typeof formSchema>