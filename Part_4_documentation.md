# Project Structure
Common/: Contains components that are used multiple times in the application.
Config/: Contains configuration file, mantine theme config for example
graphql/: Includes GraphQL queries, mutations, and schema files.
Context/: Contains UserContext for state management
Guards/: Includes components that provides auth/special access
Mutations/: Contains GraphQL mutations
Pages/: Includes all the pages of the application
Queries/: Contains GraphQL queries.
Routes/: Includes all the routes of the application
Assets/: Contains static files of the application
App.tsx: The entry point of the application.
index.tsx: The file responsible for rendering the React application.

# Features
### 1. Login
Login feature takes two input value email, password and matches the raw data in the database.

example fields: email: string password: string

### 2. Registration
User can register using giving necessary information and mutation function createUser handles registration of the user.

example fields: email: string password: string ,firstName: string,lastName: string,

### 3. Add Product
User can add product and mutation function addProduct handles and creates a new product.

example fields: id:Int, name:string, description:string, price:Float, categories:[String] ,createdBy:Int, rentPrice: Float

### 4. Edit Product
User can edit the existing product and mutation function editProduct takes id and exisiting data to update the values

example fields: id:Int, name:string, description:string, price:Float, categories:[String] ,createdBy:Int, rentPrice: Float

N.B: This feature doesn't work in the Frontend probably due to some type error. Couldn't get enough time to finish it

### 5. Delete Product
User can delete the product passing only the user id to mutation deleteProduct.

example fields: id:Int

### 6. Get Product
User can get product by product id, by product creator and it can also get all the product using mutation getProductById, getProductByCreator, getAllProduct

## Corner Case

If the user is logged out then you won't able to access other routes, he will be redirected to login page


