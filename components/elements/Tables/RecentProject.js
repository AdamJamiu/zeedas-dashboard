const RecentProjects = () => {
    return (
        <div className='shadow-4xl flex-1 rounded'>
            <div className='flex flex-row justify-between bg-[#E1E1E1] shadow-4xl p-5'>
                <p className='font-bold text-[#242424] text-[18px]'>My Recent Projects</p>
            </div>

            <div className='bg-white h-[100%]'>
                <table className='w-full'>
                    <tr className='border-bottom border'>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Project Name</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Project No</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Date</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Client</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Budget</td>
                    </tr>

                </table>

            </div>
        </div>
    )
}

export default RecentProjects;