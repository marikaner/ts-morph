﻿import * as ts from "typescript";
import {Node} from "./../common";
import {ExportableNode, AmbientableNode, DocumentationableNode} from "./../base";
import {VariableDeclarationList} from "./VariableDeclarationList";

export const VariableStatementBase = DocumentationableNode(AmbientableNode(ExportableNode(Node)));
export class VariableStatement extends VariableStatementBase<ts.VariableStatement> {
    /**
     * Gets the declaration list of variables.
     */
    getDeclarationList(): VariableDeclarationList {
        return this.factory.getVariableDeclarationList(this.node.declarationList);
    }
}
