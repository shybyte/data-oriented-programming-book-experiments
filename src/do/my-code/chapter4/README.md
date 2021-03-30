# Different implementations for addMember (immutable changes)

## [Vanilla TS](./add-member-vanilla.ts)

* Looks a bit like too much boilerplate.
* Everything else is OK.

## [Lenses (mono)](./add-member-lenses.ts)

* Concise
* The path to the member is defined only once (minimal duplication) which is pretty cool.
* Compile time error checking works great, but automated refactorings (renaming) and code completion works not perfect. 
* For functional programmers who want to look smart.

## [Immer](./add-member-immer.ts)

* Concise
* Compile time error checking works great.
* Automated refactorings (renaming) and code completion works perfect.
* Looks imperative which looks not smart enough for some people.
* Uses magic.
