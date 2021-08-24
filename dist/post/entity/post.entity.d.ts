import { BaseEntity } from "typeorm";
export declare class Article extends BaseEntity {
    id: string;
    name: string;
    email: string;
    body: string;
    title: string;
    createdAt: number;
    updatedAt: number;
    addId(): void;
    updateDates(): void;
}
