-- Create the users table
CREATE TABLE "Users" (
    "UserID" UUID PRIMARY KEY, 
    "Timestamp" TIMESTAMPTZ,  
    "UserName" VARCHAR(255),  
    "Email" VARCHAR(255),  
    "PasswordSalt" TEXT,  
    "PasswordHash" TEXT,  
    "Alias" VARCHAR(255)  
);


ALTER TABLE "Users" ADD CONSTRAINT unique_email UNIQUE ("Email");
