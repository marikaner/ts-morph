﻿import * as ts from "typescript";
import {Node} from "./../common";
import {NamedNode, ExportableNode, AmbientableNode, DocumentationableNode} from "./../base";

export const ClassDeclarationBase = DocumentationableNode(AmbientableNode(ExportableNode(NamedNode(Node))));
export class ClassDeclaration extends ClassDeclarationBase<ts.ClassDeclaration> {
}
