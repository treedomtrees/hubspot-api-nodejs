/**
 * Forms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LegalConsentOptionsNone {
    'type': LegalConsentOptionsNoneTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalConsentOptionsNoneTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LegalConsentOptionsNone.attributeTypeMap;
    }

    public constructor() {
    }
}


export type LegalConsentOptionsNoneTypeEnum = "none" ;

