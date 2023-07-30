import { Body, Controller, Post } from "@nestjs/common";
import { CompanyDto } from "../dto/company.dto";
import { CompanyService } from "../service/company.service";
import { APIResponse } from "src/global-uitlity/interfaces";
import { sendResult } from "src/global-uitlity";

@Controller('company')
export class CompanyController {
    constructor(
        private companyService: CompanyService
    ) {}

    @Post('create')
    async createCompany(@Body() compayData: CompanyDto): Promise<APIResponse> {
        try {
            const result = await this.companyService.create(compayData);
            return sendResult(true, result);
        } catch (error) {
            return sendResult(false,error.message);
        }
    }
}