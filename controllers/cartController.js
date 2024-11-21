const Carts = require('../models/cart')


exports.createCart = async (req, res) => {
    try{
        const { user , cartItem } = req.body
        console.log(req.body)
        console.log('userCartCreation')
        console.log(user , cartItem  , 1)
        const newCartList = await Carts.create({
            user : user , 
            products : [
                {
                    Item : cartItem ,
                    quantity : 1
                }
            ]
        })
        console.log(newCartList)
        res.status(201).json('YOUR ITEM IS ADDED IN CART')
    }catch{
        res.status(500).json('SERVER ERROR -500- IN ADDING CART ITEM')
    } 
};

exports.getCart = async (req , res) => {
    try{
        const getCart = await Carts.find({});
        res.status(201).json(getCart);
    } catch {
        res.status(500).json('SERVER ERROR IN GETTING CART ITEMS')
    }
}

exports.getUserCart = async (req, res) => {
    try {
        const { userID } = req.params; // Extract userID from request parameters
        console.log(`Fetching cart for user: ${userID}`);

        const userCart = await Carts.findOne({ user: userID }); // Fetch user cart based on userID
        console.log(` userCart ${userCart}`)

        res.status(200).json(userCart); // Send the cart data as response
    } catch (error) {
        console.error('Error fetching user cart:', error.message);
        res.status(500).json({ message: 'Server error in getting user cart items' });
    }
};


exports.removeCartItem = async (req, res) => {
    const { cart_index } = req.body;
    const userId = req.params.userID;
    console.log(userId)

    try {
        // Find the user's cart
        const userCart = await Carts.findOne({ user: userId });

        if (!userCart) {
            console.log('cart not found for this user')
            return res.status(404).json({ message: "Cart not found" });
        }

        console.log(`userCart this side ${userCart.products.length}`)
        console.log(`cartIndex ${cart_index}`)
        
        // Remove the item at the specified index
        userCart.products.splice(cart_index, 1);

        console.log(userCart.products)
        console.log(cart_index)

        // Save the updated document
        await userCart.save();

        res.status(200).json({ message: "Item removed from cart", cart: userCart });
    } catch (error) {
        console.error("SERVER ERROR IN UPDATING USER CART", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.updateCartItem = async (req, res) => {
    const { userID } = req.params;
    const { cartItem } = req.body; // Ensure the body has { cartItem: { Item, quantity } }

    console.log(`userID: ${userID}`);
    console.log(`cartItem: ${JSON.stringify(cartItem)}`);

    try {
        // Find the cart for the user
        const cart = await Carts.findOne({ user: userID });

        if (!cart) {
            console.log('Cart not found for this user');
            return res.status(404).json({ message: "Cart not found for this user" });
        }

        if (!cartItem || !cartItem.Item || !cartItem.quantity) {
            console.log('Invalid cartItem format');
            return res.status(400).json({ message: "Invalid cart item format" });
        }

        // Add the item to the cart's products array
        cart.products.push(cartItem);
        console.log(`Updated cart: ${JSON.stringify(cart)}`);

        // Save the updated cart
        await cart.save();
        console.log('Cart item added successfully');
        res.status(201).json({ message: 'Cart item added successfully' });

    } catch (error) {
        console.error('Server error in updating cart:', error);
        res.status(500).json({ message: 'Server error in updating cart' });
    }
};


exports.deleteCartItem = async (req ,res) => {
    const { userID } = req.params;
    const { item_id } = req.body;
    try{
        const cart = await Carts.deleteOne({ user : userID });  
        console.log('YOUR ITEM IS DELETED')
        res.status(201).json(cart)
    } catch {
        console.log('SERVER ERROR WHILE DELETING CART ITEM')
        res.status(501).json('SERVER ERROR WHILE DELETING CART ITEM')
    }
}