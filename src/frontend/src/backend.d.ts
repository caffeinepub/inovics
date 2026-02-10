import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    mobileNumber: string;
    revenueRange: string;
    email: string;
    operationalBottleneck: string;
    message: string;
    companyName: string;
    lastName: string;
    industry: string;
    firstName: string;
}
export interface backendInterface {
    addLead(firstName: string, lastName: string, companyName: string, industry: string, revenueRange: string, operationalBottleneck: string, email: string, mobileNumber: string, message: string): Promise<bigint>;
    getAllLeads(): Promise<Array<Lead>>;
    getLead(id: bigint): Promise<Lead | null>;
}
