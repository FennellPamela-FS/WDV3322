const findUser = async (obj) => {
    // one line of code pass in the obj ?!? email?
    // await User.findOne(obj).exec() 

    // let user = await User.findOne({
    //     where: {
    //         id: obj.id
    //     }
    // })
};


const saveUser = async (user) => {
    user.saveUser;
};

// connect and disconnect runs for the test only
module.exports = { connect, findUser, saveUser, disconnect };