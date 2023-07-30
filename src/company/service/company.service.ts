import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Company } from "../schema/company.schema";
import { Model } from "mongoose";

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel(Company.name) private companyModel: Model<Company>
    ) {}

    async create(company: Company) : Promise<any> {
        const result = await this.companyModel.create(company);
        return result;
    }
}