import{u as d,j as e}from"./app-f1dbd0ad.js";import{L as m}from"./Layout-c71bbb50.js";import o from"./Header-d05424ae.js";/* empty css            */import"./Flash-b8e3ee22.js";const v=({countryCodes:i,currencies:c})=>{const{data:s,setData:l,post:r,errors:a}=d({full_name:"",email:"",password:"",password_confirmation:"",country_code_id:"",contact_no:"",is_email_verified:!1,is_active:!0,balance_usdt:"",total_deposit:"",pending_deposit:"",total_withdraw:"",credit_score:"",currency_id:""}),n=t=>{t.preventDefault(),r(route("customer.create"))};return e.jsxs(m,{children:[e.jsx(o,{title:"Create Customer",link:route("customer.index"),linkText:"Back",pagination:[{href:route("customer.index"),text:"Customer List"},{href:route("customer.create"),text:"Create"}]}),e.jsx("div",{className:"mt-4 page",children:e.jsxs("form",{onSubmit:n,className:"mt-4",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Full Name"}),e.jsx("input",{type:"text",value:s.full_name,onChange:t=>l("full_name",t.target.value),className:"mt-1 block w-full input"}),a.full_name&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.full_name})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Email"}),e.jsx("input",{type:"email",value:s.email,onChange:t=>l("email",t.target.value),className:"mt-1 block w-full input"}),a.email&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.email})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Password"}),e.jsx("input",{type:"password",value:s.password,onChange:t=>l("password",t.target.value),className:"mt-1 block w-full input"}),a.password&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.password})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Confirm Password"}),e.jsx("input",{type:"password",value:s.password_confirmation,onChange:t=>l("password_confirmation",t.target.value),className:"mt-1 block w-full input"}),a.password_confirmation&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.password_confirmation})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Country Code"}),e.jsxs("select",{value:s.country_code_id,onChange:t=>l("country_code_id",t.target.value),className:"mt-1 block w-full input",children:[e.jsx("option",{value:"",children:"Select Country Code"}),i.map(t=>e.jsx("option",{value:t.id,children:t.code},t.id))]}),a.country_code_id&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.country_code_id})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Contact No"}),e.jsx("input",{type:"text",value:s.contact_no,onChange:t=>l("contact_no",t.target.value),className:"mt-1 block w-full input"}),a.contact_no&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.contact_no})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Is Email Verified"}),e.jsx("input",{type:"checkbox",checked:s.is_email_verified,onChange:t=>l("is_email_verified",t.target.checked),className:"mt-1 input"}),a.is_email_verified&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.is_email_verified})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Is Active"}),e.jsx("input",{type:"checkbox",checked:s.is_active,onChange:t=>l("is_active",t.target.checked),className:"mt-1 input"}),a.is_active&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.is_active})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Balance USDT"}),e.jsx("input",{type:"text",value:s.balance_usdt,onChange:t=>l("balance_usdt",t.target.value),className:"mt-1 block w-full input"}),a.balance_usdt&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.balance_usdt})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Total Deposit"}),e.jsx("input",{type:"text",value:s.total_deposit,onChange:t=>l("total_deposit",t.target.value),className:"mt-1 block w-full input"}),a.total_deposit&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.total_deposit})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Pending Deposit"}),e.jsx("input",{type:"text",value:s.pending_deposit,onChange:t=>l("pending_deposit",t.target.value),className:"mt-1 block w-full input"}),a.pending_deposit&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.pending_deposit})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Total Withdraw"}),e.jsx("input",{type:"text",value:s.total_withdraw,onChange:t=>l("total_withdraw",t.target.value),className:"mt-1 block w-full input"}),a.total_withdraw&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.total_withdraw})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Credit Score"}),e.jsx("input",{type:"text",value:s.credit_score,onChange:t=>l("credit_score",t.target.value),className:"mt-1 block w-full input"}),a.credit_score&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.credit_score})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700",children:"Currency"}),e.jsxs("select",{value:s.currency_id,onChange:t=>l("currency_id",t.target.value),className:"mt-1 block w-full input",children:[e.jsx("option",{value:"",children:"Select Currency"}),c.map(t=>e.jsx("option",{value:t.id,children:t.symbol},t.id))]}),a.currency_id&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:a.currency_id})]}),e.jsx("div",{className:"mb-4",children:e.jsx("button",{type:"submit",className:"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700",children:"Create Customer"})})]})})]})};export{v as default};
