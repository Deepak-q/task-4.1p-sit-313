import './Header.css'
function Header()
{
   return(<form id="email-registration" action="/" method="post">
   <div class="container">
       <h1> DEV@Deakin </h1>
       <input type="email" name="email" placeholder="Search"/>
       <span>Post</span>
       <span>Login</span>
   </div>
</form>)

}

export default Header