import { Page,BrowserContext } from "@playwright/test";
import { AllPom } from "../pom/allpom";

export interface customworld{
    page?: Page;
    context?:BrowserContext;
    allpom?:AllPom;

}