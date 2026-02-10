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
    email: string;
    message: string;
    lastName: string;
    firstName: string;
}
export interface backendInterface {
    addLead(firstName: string, lastName: string, email: string, message: string): Promise<bigint>;
    getAllLeads(): Promise<Array<Lead>>;
    getLead(id: bigint): Promise<Lead | null>;
}
