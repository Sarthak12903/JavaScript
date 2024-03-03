// Immediatley Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB conneccted`);

})();

// This pattern is commonly used to create a scope for variables so that they don't pollute the global scope, and to execute code immediately without having to explicitly call the function.

((name)=>{
    console.log("DB" + name);
})('s');



