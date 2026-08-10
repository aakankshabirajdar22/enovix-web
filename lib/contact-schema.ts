export const contactFieldNames = ["firstName", "lastName", "email", "phone", "projectDetails"] as const;

export type ContactFieldName = (typeof contactFieldNames)[number];
