import chefImg from '../assets/chef.png';

const Landing = () => {
  return (
    <section className="flex items-center justify-between px-20 py-10">
      {/* Left Section - Welcome Text */}
      <div className="w-[600px] h-[500px] border-4 border-amber-500 rounded-2xl p-6">
        <p className="text-7xl font-bold text-amber-600">Welcome</p>
        <p className="text-5xl mt-6 text-center text-amber-700">To FoodSpace</p>
      </div>

      {/* Right Section - Chef Image */}
      <div className="w-[500px]">
        <img src={chefImg} alt="Chef Illustration" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default Landing;
