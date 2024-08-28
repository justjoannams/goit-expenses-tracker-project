import{d as e,a as S,r as p,j as s,L as v,l as P,Q as m,u as c,s as y,c as I,N as L}from"./index-CJCEdQaw.js";import{W as E,S as W,E as x,a as k,b as T,c as C,P as D,d as F,B as H,L as N,f as V,H as $,g as A,h as B,i as q,T as z,I as G,j as M,k as Q}from"./Register.styled-CVdOxfkZ.js";import{T as R}from"./TotalIncome-EI6TYk5N.js";import{u as U}from"./index.esm-BJn-8Qwc.js";import{A as Y,h as J,a as K}from"./Rectangle 1x-B-IuR9L4.js";e.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;e.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;e.button`
  padding: 10px 20px;
  margin-top: 5px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  :hover {
    background-color: #e0e0e0;
  }
`;e.p`
  /* padding: 10px 20px; */
  margin-bottom: 15px;
`;e.span`
  color: rgba(250, 250, 250, 0.4);
`;e.button`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid rgba(250, 250, 250, 0.4);
  color: #fafafa;
  font-family: Suisse Intl;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  text-decoration: none;
  background: #0c0d0d;
  &:hover {
    border-radius: 40px;
    border: 1px solid #0ef387;
  }
`;const O=e.div`
  margin-top: 122px;
  @media (min-width: 768px) and (max-width: 1439.8px) {
    margin-top: 112px;
  }

  @media (min-width: 1440px) {
    margin-top: 112px;
  }
`,X=()=>{const o=S(),{handleSubmit:n,register:d,setValue:h,formState:{errors:a}}=U(),g=t=>{o(P(t)).unwrap().catch(i=>{m.error("Invalid email or password")})},[l,u]=p.useState(!1),w=()=>{u(!l)},[r,j]=p.useState(""),f=()=>r.length>=6&&!a.password,b=t=>{const i=t.target.value;j(i),h("password",i)};return s.jsx("form",{onSubmit:n(g),children:s.jsxs(E,{children:[s.jsxs("div",{children:[s.jsx(W,{defaultValue:"",...d("email",{required:"Please provide your email",minLength:{value:6,message:"Ensure your email is at least 6 characters long"}}),type:"email",placeholder:"Email",autoComplete:"new-email"}),a.email&&s.jsx(x,{children:a.email.message})]}),s.jsxs(k,{children:[s.jsxs(T,{children:[s.jsx(C,{...d("password",{required:"Enter a valid Password",minLength:{value:6}}),type:l?"text":"password",placeholder:"Password",autoComplete:"new-password",onChange:b,className:`${r.length===0?"empty":f()?"valid":"invalid"}`}),s.jsx(D,{onClick:w,type:"button"})]}),a.password&&r.length===0&&s.jsx(x,{children:a.password.message}),r.length>0&&s.jsx(F,{$isGood:r.length>=6,children:r.length>=6?"Good password":"Short password"})]}),s.jsx(O,{children:s.jsx(H,{children:"Sign In"})}),s.jsxs(N,{children:[s.jsx("p",{children:"New here?"}),s.jsxs(v,{to:"/register",children:[s.jsx(V,{children:"Create an account"})," "]})]})]})})},Z=X;function os(){const o=c(y),{name:n}=c(I);return o?(m.success(`Welcome, ${n}`),s.jsx(L,{to:"/transactions/expenses"})):s.jsx($,{children:s.jsxs("div",{children:[s.jsx(A,{children:s.jsx("title",{children:"Sign in"})}),s.jsx(Y,{children:s.jsxs(B,{children:[s.jsxs(q,{children:[s.jsx(z,{children:!o&&s.jsx(R,{})}),s.jsx(G,{src:J,alt:"Main "})]}),s.jsxs(M,{children:[s.jsx(K,{children:"Sign In"}),s.jsx(Q,{children:"Step into a world of hassle-free expense management! Your journey towards financial mastery begins here."}),s.jsx(Z,{})]})]})})]})})}export{os as default};
