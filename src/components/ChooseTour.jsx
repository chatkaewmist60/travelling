import { LandPlot, Star, Ticket, Trophy } from "lucide-react"


function ChooseTour() {


     const contents = [
          {
               id: 1,
               icon: Ticket,
               head: 'Ultimate flexibility',
               text: 'You are in control, with free cancellation and payment options to satisfy any plan or budget.'
          },

          {
               id: 2,
               icon: Star,
               head: 'Memorable experience',
               text: 'Browse and book tours and activities so incredible, you will want to tell your friends'
          },
          {
               id: 3,
               icon: LandPlot,
               head: 'Quality at our core',
               text: 'High-quality standards. Millions of reviews. A tourz company.'
          },
          {
               id: 4,
               icon: Trophy,
               head: 'Award-winning',
               text: 'New price? New plan? No problem. We are here to help, 24/7.'
          }
     ]



     return (
          <div className='w-[80vw] mx-auto my-12'>
               <h1 className="font-bold text-4xl mb-4 ">Why Choose Tour</h1>
               <div className="flex gap-20">
                    {contents.map((content) => (
                         <div key={content.id} className="flex-1">
                              <content.icon size={60} strokeWidth={1} className="text-aaa" />
                              <h2 className="text-xl mt-4 mb-6">{content.head}</h2>
                              <p className="text-sm">{content.text}</p>
                         </div>
                    ))}



               </div>
          </div>
     )
}

export default ChooseTour