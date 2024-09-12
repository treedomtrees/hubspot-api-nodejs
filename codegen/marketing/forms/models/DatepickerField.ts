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

import { DependentField } from '../models/DependentField';

/**
* A form field used to select a date
*/
export class DatepickerField {
    /**
    * A unique ID for this field\'s CRM object type. For example a CONTACT field will have the object type ID 0-1.
    */
    'objectTypeId': string;
    /**
    * Whether a field should be hidden or not. Hidden fields won\'t appear on the form, but can be used to pass a value to a property without requiring the customer to fill it in.
    */
    'hidden': boolean;
    /**
    * The value filled in by default. This value will be submitted unless the customer modifies it.
    */
    'defaultValue'?: string;
    /**
    * The identifier of the field. In combination with the object type ID, it must be unique.
    */
    'name': string;
    /**
    * Additional text helping the customer to complete the field.
    */
    'description'?: string;
    /**
    * A list of other fields to make visible based on the value filled in for this field.
    */
    'dependentFields': Array<DependentField>;
    /**
    * The main label for the form field.
    */
    'label': string;
    /**
    * The prompt text showing when the field isn\'t filled in.
    */
    'placeholder'?: string;
    /**
    * Determines how the field will be displayed and validated.
    */
    'fieldType': DatepickerFieldFieldTypeEnum;
    /**
    * Whether a value for this field is required when submitting the form.
    */
    'required': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectTypeId",
            "baseName": "objectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "defaultValue",
            "baseName": "defaultValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "dependentFields",
            "baseName": "dependentFields",
            "type": "Array<DependentField>",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "placeholder",
            "baseName": "placeholder",
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "DatepickerFieldFieldTypeEnum",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DatepickerField.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DatepickerFieldFieldTypeEnum {
    Datepicker = 'datepicker'
}

