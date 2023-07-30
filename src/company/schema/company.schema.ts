import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
    @Prop({required: true})
    name: string;

    @Prop()
    logo: string;

    @Prop()
    foundedDate: Date;

    @Prop()
    website: string;

    @Prop()
    email: string;

    @Prop()
    phoneNumber: string[]

    @Prop()
    address: string;

    @Prop()
    industry: string;

    @Prop()
    owner: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);