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
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addLead(firstName: string, lastName: string, companyName: string, industry: string, revenueRange: string, operationalBottleneck: string, email: string, mobileNumber: string, message: string): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllLeads(): Promise<Array<Lead>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getLead(id: bigint): Promise<Lead | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    grantAdminPrivileges(target: Principal): Promise<void>;
    healthCheck(): Promise<string>;
    isAdminInitialized(): Promise<boolean>;
    isCallerAdmin(): Promise<boolean>;
    promoteFirstAdmin(token: string): Promise<void>;
    renewBootstrapToken(): Promise<string>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}
