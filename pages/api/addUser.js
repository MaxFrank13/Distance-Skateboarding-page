import connectMongo from "../../utils/connectMongo";
import User from "../../models/User";

export default async function addUser(req, res) {
  try {
    console.log('step 1')
    await connectMongo();
    console.log('step 2')
    
    console.log('step 3')
    const user = await User.create(req.body);
    console.log('step 4')
  
    res.json(user)
  } catch(err) {
    console.log(err);
    res.json(err);
  }

}
