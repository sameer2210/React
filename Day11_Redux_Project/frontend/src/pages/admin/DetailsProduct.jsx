import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    asyncdeleteproduct,
    asyncupdateproduct,
} from "../../store/actions/productAction";
import { asyncupdateuser } from "../../store/actions/userActions";
const DetailsProduct = () => {
    const { id } = useParams();
    const { products } = useSelector((state) => state.productReducer);
    const { user } = useSelector((state) => state.userReducer);
    const product = products?.find((p) => p.id == id);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: product?.title,
            price: product?.price,
            description: product?.description,
            category: product?.category,
            image: product?.image,
        },
    });

    const UpdateHandler = (updatedproduct) => {
        dispatch(asyncupdateproduct(product.id, updatedproduct));
        navigate("/");
    };

    const DeleteHandler = () => {
        dispatch(asyncdeleteproduct(id));
        navigate("/");
    };

    const AddtoCartHandler = () => {
        const copyUser = { ...user, cart: [...user.cart] };

        const index = copyUser?.cart.findIndex((x) => x?.product.id == id);
        if (index == -1) {
            copyUser.cart.push({ product, quantity: 1 });
        } else {
            copyUser.cart[index] = {
                product,
                quantity: copyUser.cart[index].quantity + 1,
            };
        }
        dispatch(asyncupdateuser(copyUser.id, copyUser));
    };

    return product ? (
        <div className="w-full">
            <div className="w-full">
                <img
                    src={product?.image}
                    className="block mx-auto h-[30vmax]"
                    alt=""
                />
                <h1 className="text-2xl mt-3 ">{product?.title}</h1>
                <p>{product?.description}</p>
                <h2 className="text-red-400 mt-3 text-5xl ">
                    {product?.price}
                </h2>
                <button
                    onClick={AddtoCartHandler}
                    className="rounded px-4 py-3 bg-yellow-400 mt-5"
                >
                    Add to Cart
                </button>
            </div>
            {/*  */}
            <hr className="my-10" />
            {user?.isAdmin && (
                <form
                    onSubmit={handleSubmit(UpdateHandler)}
                    className="p-5 w-full"
                >
                    <h1 className="text-blue-400 mb-5 text-5xl ">
                        Update Product Details
                    </h1>
                    <input
                        {...register("image")}
                        className="w-full text-3xl border-b outline-0 p-2 mb-5"
                        type="url"
                        placeholder="Product Image"
                    />
                    <input
                        {...register("title")}
                        className="w-full text-3xl border-b outline-0 p-2 mb-5"
                        type="text"
                        placeholder="Product Name"
                    />
                    <input
                        {...register("price")}
                        className="w-full text-3xl border-b outline-0 p-2 mb-5"
                        type="text"
                        placeholder="0.00"
                    />
                    <input
                        {...register("category")}
                        className="w-full text-3xl border-b outline-0 p-2 mb-5"
                        type="text"
                        placeholder="Product Category"
                    />
                    <textarea
                        {...register("description")}
                        className="w-full text-3xl border-b outline-0 p-2 mb-5"
                        type="text"
                        placeholder="enter description here..."
                    ></textarea>
                    <button className="mr-5 text-white text-3xl px-5 py-3 rounded bg-red-400">
                        Update Product
                    </button>
                    <button
                        onClick={DeleteHandler}
                        type="button"
                        className="text-white text-3xl px-5 py-3 rounded bg-red-400"
                    >
                        Delete Product
                    </button>
                </form>
            )}
            {/*  */}
        </div>
    ) : (
        "Loading..."
    );
};

export default DetailsProduct;
