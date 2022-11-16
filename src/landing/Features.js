import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'تأهيل ١٠٠٠ اماراتي من خلال التدريب التقني و الاستراتيجي',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'مضاعفة عدد شركات الاقتصاد الرقمي المسجلة في بحلول 2025',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'مضاعفة عدد مطوري التطبيقات في دبي',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'دعم  الشركة الناشئة عن طريق مسرعات للتطبيقات',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white pb-24 sm:pb-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600 text-end md:text-center">نهدف إلى جعل دبي مركزًا لواجهة التطبيقات لاقتصاد التطبيقات العالمي</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-end md:text-center">عن المبادرة</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 text-end">
          طبق في دبي احد مبادرات حكومة دبي، و التي تعمل على تمكين المبرمجين ودعم مجتمعات البرمجة وكافة المهتمين بإطلاق مشاريعهم عبر الهواتف الذكيه و اطلاق تطبيقات نوعيه. 
سواء كنت مبتدئًا ولديك فكرة قابلة للتطبيق ولكنك لا تمتلك مهارات في البرمجة أو مطورًا محترفًا، توفر لك طبق في دبي امكاني تطبيق افكارك، و مشاريعك الرقمية. 
.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row ">
          
          
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-bold leading-8 text-gray-900 text-end">{feature.name} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
