import{W as p,r as c,j as e,Y as f,b as x}from"./app-1232777b.js";import{G as w}from"./GuestLayout-d3b58cef.js";import{T as o,I as m}from"./TextInput-53b52a1e.js";import{I as i}from"./InputLabel-45809574.js";import{P as g}from"./PrimaryButton-2d950985.js";import"./zod-f39d316b.js";import"./Modal-4c44f10d.js";import"./transition-76c4e644.js";import"./dialog-bcdb0582.js";import"./Input-c7792e37.js";import"./index-c96e2231.js";import"./Dropdown-fdee1dac.js";import"./Select-a7648edf.js";import"./Dropzone-5bfc1712.js";import"./TextArea-47aa8356.js";import"./ModalForm-c7f8db30.js";/* empty css                */function T(){const{data:a,setData:r,post:n,processing:l,errors:t,reset:d}=p({name:"",email:"",password:"",password_confirmation:""});c.useEffect(()=>()=>{d("password","password_confirmation")},[]);const u=s=>{s.preventDefault(),n(route("register"))};return e.jsxs(w,{children:[e.jsx(f,{title:"Register"}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"name",value:"Name"}),e.jsx(o,{id:"name",name:"name",value:a.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:s=>r("name",s.target.value),required:!0}),e.jsx(m,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s=>r("email",s.target.value),required:!0}),e.jsx(m,{message:t.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password",s.target.value),required:!0}),e.jsx(m,{message:t.password,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e.jsx(o,{id:"password_confirmation",type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s=>r("password_confirmation",s.target.value),required:!0}),e.jsx(m,{message:t.password_confirmation,className:"mt-2"})]}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[e.jsx(x,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e.jsx(g,{className:"ms-4",disabled:l,children:"Register"})]})]})]})}export{T as default};