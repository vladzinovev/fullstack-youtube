import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import {FieldError} from 'react-hook-form';
import { IInput } from "../Field/Field.interface";

type TypeInputPropsITeaxtArea=TextareaHTMLAttributes<HTMLTextAreaElement> & IInput;

export interface ITextArea extends TypeInputPropsITeaxtArea{}