/**
 * Marketing Transactional Single Send
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A request object to create a SMTP API token
*/
export class SmtpApiTokenRequestEgg {
    /**
    * Indicates whether a contact should be created for email recipients.
    */
    'createContact': boolean;
    /**
    * A name for the campaign tied to the SMTP API token.
    */
    'campaignName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createContact",
            "baseName": "createContact",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "campaignName",
            "baseName": "campaignName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SmtpApiTokenRequestEgg.attributeTypeMap;
    }

    public constructor() {
    }
}

