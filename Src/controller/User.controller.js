const userModel = require('../model/user.model');

const checking = (req, res) => {
    try {
        if (req.query.error === 'true') {
            throw new Error('Simulated error');
        }
        res.status(200).json({ status: true, message: 'welcome to testing learning' })
    } catch (error) {
        res.status(500).json({ status: false, message: 'something went wrong' })
    }
}

const createNewUser = async (req, res) => {
    try {
        if (req.query.error === 'true') {
            throw new Error('Simulated error');
        }
        const input = req.body;
        const check = await userModel.create(input)
        if (check) {
            res.status(201).json({ status: true, message: 'Successfully new user created' })
        }
    } catch (error) {
        res.status(500).json({ status: false, message: 'something went wrong' })
    }
}

// const getUserById = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const input = await userModel.findOne({ where: { id: userId } });
//         if (input) {
//             res.status(200).json({ status: true, data: input.dataValues });
//         } else {
//             res.status(404).json({ status: false, message: 'User not found' });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ status: false, message: 'Something went wrong' });
//     }
// };


// const updateOldUser = async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const input = req.body;

//         const user = await userModel.findByPk(userId);
//         if (!user) {
//             return res.status(404).json({ status: false, message: 'User not found' });
//         }

//         const updates = await userModel.update(input, {
//             where: { id: userId },
//         })
//         if (updates) {
//             res.status(200).json({ status: true, message: 'Successfully updated user' });
//         }

//     } catch (error) {
//         res.status(500).json({ status: false, message: 'Something went wrong' });
//     }
// };


// const userDelete = async (req, res) => {
//     try {
//         const userId = req.params.id;

//         const user = await userModel.findByPk(userId);
//         if (!user) {
//             return res.status(404).json({ status: false, message: 'User not found' });
//         }

//         const updates = await userModel.update({ is_delete: 1 }, {
//             where: { id: userId },
//         });
//         if (updates) {
//             res.status(200).json({ status: true, message: 'Successfully user deleted' });
//         }


//     } catch (error) {
//         res.status(500).json({ status: false, message: 'Something went wrong' });
//     }
// }

const getAllUser = async(req, res) => {
    try {
        if (req.query.error === 'true') {
            throw new Error('Simulated error');
        } else {
            const users = await userModel.findAll()
            if (!users) {
                return res.status(404).json({ status: false, message: 'No users founded' })
            } else {
                return res.status(200).json({ status: true, data: users })
            }
        }
    } catch (error) {
        res.status(500).json({ status: false, message: 'Something went wrong' });
    }
}

module.exports = { checking, getAllUser, createNewUser }