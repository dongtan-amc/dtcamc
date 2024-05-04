import emplymentBanner from "@/public/unsplash/employment-banner.jpg";
import Banner from "@/components/common/banner";

export default function EmploymentPage() {
  return (
    <main>
      <Banner image={emplymentBanner} subRoute="채용" employment />
    </main>
  );
}
