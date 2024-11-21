const Wishlists = require('../models/wishlist')


exports.createWishlist = async (req, res) => {
    try{
        const { user , wishlistItems } = req.body
        console.log(user)

        const newIWishlist = await Wishlists.create({
            user : user , 
            wishlistItems : wishlistItems
        })
        console.log(newIWishlist)
        res.status(201).json('YOUR ITEM IS ADDED IN WISHLIST')
    }catch{
        res.status(500).json('SERVER ERROR -500-')
    } 
};

exports.getWishlist = async (req , res) => {
    try{
        const getWishlistItem = await Wishlists.find({});
        res.status(201).json(getWishlistItem);
    } catch {
        res.status(500).json('SERVER ERROR IN GETTING WISHLIST ITEMS')
    }
}

exports.getUserWishlist  = async (req , res) => {
    try{
        let userID = req.params.userID
        const getUserWishlist = await Wishlists.findOne({ user : userID });
        res.status(201).json(getUserWishlist);
    } catch {
        res.status(500).json('SERVER ERROR IN GETTING WISHLIST ITEMS')
    }
}

exports.updateWishlistItem  = async (req, res) => {
    const { userID } = req.params;
    const { user , wishlistItems } = req.body;
    console.log(` userID ${userID}`)
    console.log(` user ${user}`)
    
    try{
        const wishlist = await Wishlists.findOne({ user : userID });   
        if (!wishlist) {
            console.log('Wishlist not found for this user')
            return res.status(404).json({ message: "Wishlist not found for this user" });
        }
        else {
            if(wishlistItems === null) return 
            wishlist.wishlistItems.push(wishlistItems);
            const data = wishlist.wishlistItems 
            console.log(data)
            // Save the updated document
            await wishlist.save()
            res.status(201).json('YOUR RESPONSE IS ADDED')
        }
    } catch{
        console.log('SERVER ERROR IN UPDATING WISHLIST')
        res.status(501).json('SERVER ERROR IN UPDATING WISHLIST')
    }
}

exports.removeWishlistItem = async (req, res) => {
    const { wishlist_index } = req.body;
    const userId = req.params.userID; // Assuming `req.user.id` is populated by middleware.
    console.log(userId)
    try {
        // Find the user's wishlist
        const userWishlist = await Wishlists.findOne({ user: userId });

        if (!userWishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        // Check if the index is valid
        if (wishlist_index < 0 || wishlist_index >= userWishlist.wishlistItems.length) {
            return res.status(400).json({ message: "Invalid index" });
        }
        
        // Remove the item at the specified index
        userWishlist.wishlistItems.splice(wishlist_index, 1);

        console.log(userWishlist.wishlistItems)
        console.log(wishlist_index)

        // Save the updated document
        await userWishlist.save();

        res.status(200).json({ message: "Item removed from wishlist", wishlist: userWishlist });
    } catch (error) {
        console.error("SERVER ERROR IN UPDATING WISHLIST", error);
        res.status(500).json({ message: "Server error" });
    }
};