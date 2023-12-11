var documenterSearchIndex = {"docs":
[{"location":"api/#Interface-Functions","page":"API","title":"Interface Functions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"symbolic_container\nis_variable\nvariable_index\nvariable_symbols\nis_parameter\nparameter_index\nparameter_symbols\nis_independent_variable\nindependent_variable_symbols\nis_observed\nobserved\nis_time_dependent\nconstant_structure\nparameter_values\ngetp\nsetp","category":"page"},{"location":"api/#SymbolicIndexingInterface.symbolic_container","page":"API","title":"SymbolicIndexingInterface.symbolic_container","text":"symbolic_container(p)\n\nUsing p, return an object that implements the symbolic indexing interface. In case p itself implements the interface, p can be returned as-is. All symbolic indexing interface methods fall back to calling the same method on symbolic_container(p), so this may be used for trivial implementations of the interface that forward all calls to another object.\n\nThis is also used by ParameterIndexingProxy\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.is_variable","page":"API","title":"SymbolicIndexingInterface.is_variable","text":"is_variable(sys, sym)\n\nCheck whether the given sym is a variable in sys.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.variable_index","page":"API","title":"SymbolicIndexingInterface.variable_index","text":"variable_index(sys, sym, [i])\n\nReturn the index of the given variable sym in sys, or nothing otherwise. If constant_structure is false, this accepts the current time index as an additional parameter i.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.variable_symbols","page":"API","title":"SymbolicIndexingInterface.variable_symbols","text":"variable_symbols(sys, [i])\n\nReturn a vector of the symbolic variables being solved for in the system sys. If constant_structure(sys) == false this accepts an additional parameter indicating the current time index. The returned vector should not be mutated.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.is_parameter","page":"API","title":"SymbolicIndexingInterface.is_parameter","text":"is_parameter(sys, sym)\n\nCheck whether the given sym is a parameter in sys.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.parameter_index","page":"API","title":"SymbolicIndexingInterface.parameter_index","text":"parameter_index(sys, sym)\n\nReturn the index of the given parameter sym in sys, or nothing otherwise.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.parameter_symbols","page":"API","title":"SymbolicIndexingInterface.parameter_symbols","text":"parameter_symbols(sys)\n\nReturn a vector of the symbolic parameters of the given system sys. The returned vector should not be mutated.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.is_independent_variable","page":"API","title":"SymbolicIndexingInterface.is_independent_variable","text":"is_independent_variable(sys, sym)\n\nCheck whether the given sym is an independent variable in sys. The returned vector should not be mutated.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.independent_variable_symbols","page":"API","title":"SymbolicIndexingInterface.independent_variable_symbols","text":"independent_variable_symbols(sys)\n\nReturn a vector of the symbolic independent variables of the given system sys.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.is_observed","page":"API","title":"SymbolicIndexingInterface.is_observed","text":"is_observed(sys, sym)\n\nCheck whether the given sym is an observed value in sys.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.observed","page":"API","title":"SymbolicIndexingInterface.observed","text":"observed(sys, sym, [states])\n\nReturn the observed function of the given sym in sys. The returned function should have the signature (u, p) -> [values...] where u and p is the current state and parameter vector. If istimedependent(sys) == true, the function should accept the current time t as its third parameter. If constant_structure(sys) == false, accept a third parameter which can either be a vector of symbols indicating the order of states or a time index which identifies the order of states.\n\nSee also: is_time_dependent, constant_structure\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.is_time_dependent","page":"API","title":"SymbolicIndexingInterface.is_time_dependent","text":"is_time_dependent(sys)\n\nCheck if sys has time as (one of) its independent variables.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.constant_structure","page":"API","title":"SymbolicIndexingInterface.constant_structure","text":"constant_structure(sys)\n\nCheck if sys has a constant structure. Constant structure systems do not change the number of variables or parameters over time.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.parameter_values","page":"API","title":"SymbolicIndexingInterface.parameter_values","text":"parameter_values(p)\n\nReturn an indexable collection containing the value of each parameter in p.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.getp","page":"API","title":"SymbolicIndexingInterface.getp","text":"getp(sys, p)\n\nReturn a function that takes an integrator or solution of sys, and returns the value of the parameter p. Requires that the integrator or solution implement parameter_values.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.setp","page":"API","title":"SymbolicIndexingInterface.setp","text":"setp(sys, p)\n\nReturn a function that takes an integrator of sys and a value, and sets the the parameter p to that value. Requires that the integrator implement parameter_values and the returned collection be a mutable reference to the parameter vector in the integrator.\n\n\n\n\n\n","category":"function"},{"location":"api/#Traits","page":"API","title":"Traits","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"ScalarSymbolic\nArraySymbolic\nNotSymbolic\nsymbolic_type\nhasname\ngetname","category":"page"},{"location":"api/#SymbolicIndexingInterface.ScalarSymbolic","page":"API","title":"SymbolicIndexingInterface.ScalarSymbolic","text":"struct ScalarSymbolic <: SymbolicTypeTrait end\n\nTrait indicating a type is a scalar symbolic variable.\n\nSee also: ArraySymbolic, NotSymbolic, symbolic_type\n\n\n\n\n\n","category":"type"},{"location":"api/#SymbolicIndexingInterface.ArraySymbolic","page":"API","title":"SymbolicIndexingInterface.ArraySymbolic","text":"struct ArraySymbolic <: SymbolicTypeTrait end\n\nTrait indicating type is a symbolic array. Calling collect on a symbolic array must return an AbstractArray containing ScalarSymbolic variables for each element in the array, in the same shape as the represented array. For example, if a is a symbolic array representing a 2x2 matrix, collect(a) must return a 2x2 array of scalar symbolic variables.\n\nSee also: ScalarSymbolic, NotSymbolic, symbolic_type\n\n\n\n\n\n","category":"type"},{"location":"api/#SymbolicIndexingInterface.NotSymbolic","page":"API","title":"SymbolicIndexingInterface.NotSymbolic","text":"struct NotSymbolic <: SymbolicTypeTrait end\n\nTrait indicating a type is not symbolic.\n\nSee also: ScalarSymbolic, ArraySymbolic, symbolic_type\n\n\n\n\n\n","category":"type"},{"location":"api/#SymbolicIndexingInterface.symbolic_type","page":"API","title":"SymbolicIndexingInterface.symbolic_type","text":"symbolic_type(x) = symbolic_type(typeof(x))\nsymbolic_type(::Type)\n\nGet the symbolic type trait of a type. Default to NotSymbolic for all types except Symbol.\n\nSee also: ScalarSymbolic, ArraySymbolic, NotSymbolic\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.hasname","page":"API","title":"SymbolicIndexingInterface.hasname","text":"hasname(x)\n\nCheck whether the given symbolic variable (for which symbolic_type(x) != NotSymbolic()) has a valid name as per getname.\n\n\n\n\n\n","category":"function"},{"location":"api/#SymbolicIndexingInterface.getname","page":"API","title":"SymbolicIndexingInterface.getname","text":"getname(x)::Symbol\n\nGet the name of a symbolic variable as a Symbol\n\n\n\n\n\n","category":"function"},{"location":"api/#Types","page":"API","title":"Types","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"SymbolCache","category":"page"},{"location":"api/#SymbolicIndexingInterface.SymbolCache","page":"API","title":"SymbolicIndexingInterface.SymbolCache","text":"struct SymbolCache{V,P,I}\nfunction SymbolCache(vars, [params, [indepvars]])\n\nA struct implementing the symbolic indexing interface for the trivial case of having a vector of variables, parameters and independent variables. This struct does not implement observed, and is_observed returns false for all input symbols. It is considered to be time dependent if it contains at least one independent variable.\n\nThe independent variable may be specified as a single symbolic variable instead of an array containing a single variable if the system has only one independent variable.\n\n\n\n\n\n","category":"type"},{"location":"#SymbolicIndexingInterface.jl:-Arrays-of-Arrays-and-Even-Deeper","page":"Home","title":"SymbolicIndexingInterface.jl: Arrays of Arrays and Even Deeper","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SymbolicIndexingInterface.jl is a set of interface functions for handling containers of symbolic variables.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install SymbolicIndexingInterface.jl, use the Julia package manager:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"SymbolicIndexingInterface\")","category":"page"},{"location":"#Contributing","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Please refer to the SciML ColPrac: Contributor's Guide on Collaborative Practices for Community Packages for guidance on PRs, issues, and other matters relating to contributing to SciML.\nThere are a few community forums:\nthe #diffeq-bridged channel in the Julia Slack\nJuliaDiffEq on Gitter\non the Julia Discourse forums\nsee also SciML Community page","category":"page"},{"location":"#Reproducibility","page":"Home","title":"Reproducibility","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"<details><summary>The documentation of this SciML package was built using these direct dependencies,</summary>","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg # hide\nPkg.status() # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"</details>","category":"page"},{"location":"","page":"Home","title":"Home","text":"<details><summary>and using this machine and Julia version.</summary>","category":"page"},{"location":"","page":"Home","title":"Home","text":"using InteractiveUtils # hide\nversioninfo() # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"</details>","category":"page"},{"location":"","page":"Home","title":"Home","text":"<details><summary>A more complete overview of all dependencies and their versions is also provided.</summary>","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg # hide\nPkg.status(;mode = PKGMODE_MANIFEST) # hide","category":"page"},{"location":"","page":"Home","title":"Home","text":"</details>","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can also download the \n<a href=\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TOML\nversion = TOML.parse(read(\"../../Project.toml\",String))[\"version\"]\nname = TOML.parse(read(\"../../Project.toml\",String))[\"name\"]\nlink = \"https://github.com/SciML/\"*name*\".jl/tree/gh-pages/v\"*version*\"/assets/Manifest.toml\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"\">manifest</a> file and the\n<a href=\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"using TOML\nversion = TOML.parse(read(\"../../Project.toml\",String))[\"version\"]\nname = TOML.parse(read(\"../../Project.toml\",String))[\"name\"]\nlink = \"https://github.com/SciML/\"*name*\".jl/tree/gh-pages/v\"*version*\"/assets/Project.toml\"","category":"page"},{"location":"","page":"Home","title":"Home","text":"\">project</a> file.","category":"page"}]
}
