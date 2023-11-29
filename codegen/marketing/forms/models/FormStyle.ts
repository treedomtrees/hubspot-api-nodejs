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

/**
* Styling options for the form
*/
export class FormStyle {
    /**
    * 
    */
    'labelTextSize': string;
    /**
    * 
    */
    'legalConsentTextColor': string;
    /**
    * 
    */
    'fontFamily': string;
    /**
    * 
    */
    'legalConsentTextSize': string;
    /**
    * 
    */
    'backgroundWidth': string;
    /**
    * 
    */
    'helpTextSize': string;
    /**
    * 
    */
    'submitFontColor': string;
    /**
    * 
    */
    'labelTextColor': string;
    /**
    * 
    */
    'submitAlignment': FormStyleSubmitAlignmentEnum;
    /**
    * 
    */
    'submitSize': string;
    /**
    * 
    */
    'helpTextColor': string;
    /**
    * 
    */
    'submitColor': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "labelTextSize",
            "baseName": "labelTextSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "legalConsentTextColor",
            "baseName": "legalConsentTextColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "fontFamily",
            "baseName": "fontFamily",
            "type": "string",
            "format": ""
        },
        {
            "name": "legalConsentTextSize",
            "baseName": "legalConsentTextSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "backgroundWidth",
            "baseName": "backgroundWidth",
            "type": "string",
            "format": ""
        },
        {
            "name": "helpTextSize",
            "baseName": "helpTextSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "submitFontColor",
            "baseName": "submitFontColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "labelTextColor",
            "baseName": "labelTextColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "submitAlignment",
            "baseName": "submitAlignment",
            "type": "FormStyleSubmitAlignmentEnum",
            "format": ""
        },
        {
            "name": "submitSize",
            "baseName": "submitSize",
            "type": "string",
            "format": ""
        },
        {
            "name": "helpTextColor",
            "baseName": "helpTextColor",
            "type": "string",
            "format": ""
        },
        {
            "name": "submitColor",
            "baseName": "submitColor",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FormStyle.attributeTypeMap;
    }

    public constructor() {
    }
}


export type FormStyleSubmitAlignmentEnum = "left" | "right" | "center" ;
