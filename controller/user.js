const status = require('statuses')
const person = require('../models/UserSchema')
// const MyUrl = require('url')
async function GetAllUserHandler(req, res) {
    try {
        const UserData = await person.find({})
        if (UserData.length == 0) {
            res.send({ status: 'no data available' })
        }
        else {
            console.log(UserData)
            console.log("show Data: ")
            return res.status(200).json(UserData)
        }
    } catch (error) {
        console.log("Internal error: ", error)
        return res.status(500).send({ error: 'Not found' })
    }
}
async function GetUserById(req, res) {
    try {
        // const path = MyUrl.parse(req.url, true)
        // const searchKey = path.query.mobile


        const Mobile = req.params.mobile
        const Password = req.params.Password
        const UserData = await person.find({ mobile: Mobile })
        if (UserData.length == 0) {
            res.status(400).json({ status: 'id is wrong' })
        }
        else if (UserData[0].Password == Password) {
            res.send({status: UserData}).status(200)

        }
        else {
            res.status(404).json({ status: 'Enter correct Password' })
        }
    }
    catch (error) {
        console.log("Internal error: ", error)
        res.status(500).send({ error: 'Not found' })
    }
}

async function EnterUser(req, res) {
    try {
        const InComingData = req.body
        const NewPerson = new person(InComingData)
        const SavePerson = await NewPerson.save()
        console.log("data saved: ")
        res.status(200).json(SavePerson)
    } catch (error) {
        console.log("error saving person: ", error)
        res.status(500).send({ error: 'internal server error not create' })
    }

}
async function UpdateUserHandler(req, res) {
    try {
        const personId = req.params.id
        const NewData = req.body
        const UserData = await person.findByIdAndUpdate(personId, NewData, {
            new: true,
            runValidators: true
        })

        if (!UserData) {
            res.status(404).json({ error: 'Person Not found: ' })
        }
        res.status(200).json(UserData)
    } catch (error) {
        console.log("Internal error: ", error)
        res.status(500).send({ error: 'Not found' })
    }
}
async function deleteUserHandler(req, res) {
    try {
        const deleteKey = req.params.mobile
        const deleteData = await person.findOneAndDelete({ mobile: deleteKey })
        if (deleteData.deletedCount == 0) {
            res.status(400).json({ status: 'no data found' })
        }
        else {

            res.status(200).json([{status: deleteData}, {User_id: deleteData._id}])
        }
    } catch (error) {
        console.log("Internal error: ", error)
        res.status(500).send({ error: 'Not found' })

    }
}

module.exports = {
    GetAllUserHandler,
    GetUserById,
    EnterUser,
    UpdateUserHandler,
    deleteUserHandler,
}