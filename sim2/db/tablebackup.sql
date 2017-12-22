-- sim 1 70F

-- sim 2 68E
create table shopper (

    -- sim 2 67G
    id serial primary key,
    auth0 text
)

create table houses (
    id serial PRIMARY KEY,

    -- sim 2 69G
    housename VARCHAR(40),

    -- sim 2 71 G
    description text,
    
    -- sim 2 70 G
    loan int,
    recommend int,
    desired int,
    address VARCHAR(40),
    city VARCHAR(25),
    zip int,
    seller int,

        -- Sim 2 67E
        foreign key seller references shopper(id)
    )