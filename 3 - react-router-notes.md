# Route parameters

> Changeable section of a rout
> Same component shown for every variation

/products/{id}

/product/1
/product/3

id being a route parameter (similar to path variables)

---

add a parameter/path variable to a path of a route in its defintion. a 'path' followed by colon and identifier of the Route parameter/path variable.

Example:

```tsx

{/*... */}
    <Route path="/shop" element={<ShopLayout />}>
        <Route 
            path="/"
            element={<Shop />}
            loader={loadShop}
        />
        <Route 
            path="/product/:id" {/* full path -> /shop/product/id*/}
            element={<Product />}
            loader={loadProduct}
        />
    </Route>
{/*... */}

```

create a function to fetch data for the specific param

```tsx

export const loadProduct = async ({ params }) => {

    const { id } = params;
    const response = await fetch('http://localhost:4000/shop/product/' + id);

    return response.json();
}

```

create the Component to be rendered on the sepcific route that requires a parameter

use 'useLoaderData' hook to get the data that was fetched
use 'useParams' hook to get the id used in the parameter

```tsx

import { useParams, useLoaderData } from 'react-router-dom'

export const Product = () => {

    const { id } = useParams();
    const product = useLoaderData();

    return (
        <>
            <h1>product.name</h1>
        </>
    )
}

```

make sure that any link linking to a specific product has the correct path to display the Component.

to="/shop/product/{String(product.id)}"
/
to="/shop/product/{product.id.toString()}"

# Error Handling

After fetching data from an API/JSON server check if the response is ok (200), if not throw an Error

Example:
```tsx

//...

const response = await fetch('http://localhost:4000/shop/product/' + id)

if !response.ok 
    throw Error('Could not find the product');

//...

```

create a Component that should be displayed whenever an error occurs for a provided Route

use the 'useRouteError' hook to retrieve the associated into a constant variable

Example:
```tsx

import { useRouteError } from 'react-router-dom'

export const ErrorProduct = () => {

    const error = useRouteError();

    return (
        <>
            <h2>Error</h2>
            <p>{error}</p>
            <Link to="/">Go home</Link>
        </>
    )
}

```


Associate the error to be thrown with the Route by adding the *errorElement* attribute/prop to the Route and passing an Error Component to be displayed incase that error occurs.

```tsx

{/*... */}
    <Route path="/shop" element={<ShopLayout />}>
        <Route 
            path="/"
            element={<Shop />}
            loader={loadShop}
        />
        <Route 
            path="/product/:id" {/* full path -> /shop/product/id*/}
            element={<Product />}
            loader={loadProduct}
            errorElement={<ErrorProduct />}
        />
    </Route>
{/*... */}


```

To make an error to be displayed for any child route we don't have to insert an attribute/prop of each error, we can put it on the parent Route and pass in the Component to be displayed.

However each response ahve to throw its own error for this to be meaningful

```tsx

{/*... */}
    <Route path="/shop" element={<ShopLayout />} errorElement={<ErrorProduct />}>
        <Route 
            path="/"
            element={<Shop />}
            loader={loadShop}
        />
        <Route 
            path="/product/:id" {/* full path -> /shop/product/id*/}
            element={<Product />}
            loader={loadProduct}
        />
    </Route>
{/*... */}


```

# Forms in react

use the a react-router-dom Component called 'Form' which accepts *method* and *action* attribute/props

method -> would be the type of request the form is supposed to make, *POST, GET, PUT, DELETE*
action -> the specified route path the request should sent to

each input field must have a name attribute associated with it, it will be used to access the value using said name

create the *Form* component

Example
```tsx

import { Form } from 'react-router-form';

export const SignUpForm = () => {

    return (
        <>
            <Form method="POST" action="/signup">
                <label>
                    <span>Name</span>
                    <input type="text" name="name" required />
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" name="mail" required />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" name="pass" required />
                </label>
                <button>Submit</button>
            </Form>
        </>
    )
}

```

create an asynchronous function to use the information form the input fields whenever the form is submitted

put *async* before the function / function params to make the function an asynchronous one which is supposed to return a promise

in its params, destructure an object *{ request }* which will be used to access the request input values and other info

to access input data create a constant (*data*) that stores the object of *request.formData()*, formData method returns an object conataining the data, this constant can be used to access the input values by their names

to access the data -> *data.get('name')*, supply name of the input

// await


```tsx

export const submitSignUpForm = async ({ request }) => {

    const data = await request.formData();

    // here we can return a n object to the page submitting the form / a redirect -> redirect('/path')
}

```

Add an action prop to the Route that will handle the data

```tsx

{/* ... */}
    <Route
        path="/signup"
        element={<SignUp />}
        action={submitSignUpForm}
    />
{/* ... */}


```

# Navigate Component

Redirect users based on certain conditions

use the *Navigation* component from  'react-router-dom' and pass the props *to* and supply a path the user should be naviagated to if they are not authorised or logged out

add another prop *replace* and supply boolean value **true** so it can be replaced by the next page in history stack, that way the user cannot go back to said page.

// note, clear history stack after user logs out

```tsx

// inside a rendered component, test if a user is authenticated

//condition
return <Navigation to="/" replace="true"/>

```