# Node-pg



 1. Install dependencies

    ```
    npm install .
    ```
 
 2. Create Model with sequlize-cli

    ```  	
    npx sequelize-cli model:generate --name User --attributes ....
    ```

 3. Running Migrations

    ```  	
    npx sequelize-cli db:migrate 
    ```
    
 4.Undoing Migrations

    ```  	
    npx sequelize-cli db:migrate:undo
    ```
 
