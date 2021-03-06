---
title: Renaming
---

## Renaming

Given the source file for following code:

```ts
enum MyEnum {
    myMember
}

const myVar = MyEnum.myMember;
```

Renaming can be done as follows:

```ts
const myEnum = sourceFile.getEnum("MyEnum")!;
myEnum.rename("NewEnum");
```

Which will rename all usages of `MyEnum` to `NewEnum` across _all_ files.

So the file above would now contain the following code:

```ts
enum NewEnum {
    myMember
}

const myVar = NewEnum.myMember;
```

### Renaming in comments and strings

Set the `renameInComments` and `renameInStrings` options to `true` (they are `false` by default):

```ts setup: let myEnum: EnumDeclaration;
myEnum.rename("SomeOtherName", {
    renameInComments: true,
    renameInStrings: true
});
```

### Renaming Files or Directories

See:

* [Moving Files](../details/source-files#move)
* [Moving Directories](../navigation/directories#moving)
