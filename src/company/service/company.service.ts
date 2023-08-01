import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Company } from "../schema/company.schema";
import { Model } from "mongoose";
import { CompanyDto } from "../dto/company.dto";

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel(Company.name) private companyModel: Model<Company>
    ) {}

    async create(company: Company) : Promise<Partial<CompanyDto>> {
        const result = await this.companyModel.create(company);
        return result
    }
}