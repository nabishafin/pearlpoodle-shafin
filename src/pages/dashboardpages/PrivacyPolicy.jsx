import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

const PrivacyPolicy = () => {
  const handleEdit = () => {
    // Handle edit functionality
    console.log("Edit button clicked");
    alert("Edit functionality would be implemented here");
  };

  return (
    <div className=" font-sans pr-5">
      {/* Header */}
      <h2 className="text-xl sm:text-2xl font-bold mb-5 text-white bg-[#017783] p-5 rounded-lg">
        Privacy policy
      </h2>

      {/* Edit Button */}
      <div className="flex justify-end p-4">
        <Button
          onClick={handleEdit}
          className="bg-[#017783]  hover:bg-[#015a63] text-white  rounded-full flex items-center space-x-1 shadow-md"
        >
          <Edit className="h-4 w-4" />
          <span>Edit</span>
        </Button>
      </div>

      {/* Content */}
      <div className=" ">
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci.
            Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis
            aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis
            habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan
            vehicula imperdiet mattis. Neque a vitae diam pharetra duis
            habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum
            nisl magna convallis arcu enim tortor. Cursus a sed tortor enim mi
            imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras
            risus ultrices duis pharetra sit porttitor elementum sagittis
            elementum. Ut vitae blandit pulvinar fermentum in id sed. At
            pellentesque non semper eget egestas vulputate id volutpat quis.
            Dolor etiam sodales at elementum mattis nibh quam placerat ut.
            Suspendisse est adipiscing proin et. Leo nisl bibendum donec ac non
            eget euismod suscipit. At ultrices nullam ipsum tellus. Non dictum
            orci at tortor convallis tortor suspendisse. Ac duis senectus arcu
            nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi
            lectus.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci.
            Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis
            aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis
            habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan
            vehicula imperdiet mattis. Neque a vitae diam pharetra duis
            habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum
            nisl magna convallis arcu enim tortor. Cursus a sed tortor enim mi
            imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras
            risus ultrices duis pharetra sit porttitor elementum sagittis
            elementum. Ut vitae blandit pulvinar fermentum in id sed. At
            pellentesque non semper eget egestas vulputate id volutpat quis.
            Dolor etiam sodales at elementum mattis nibh quam placerat ut.
            Suspendisse est adipiscing proin et. Leo nisl bibendum donec ac non
            eget euismod suscipit. At ultrices nullam ipsum tellus. Non dictum
            orci at tortor convallis tortor suspendisse. Ac duis senectus arcu
            nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi
            lectus.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci.
            Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis
            aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis
            habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan
            vehicula imperdiet mattis. Neque a vitae diam pharetra duis
            habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum
            nisl magna convallis arcu enim tortor. Cursus a sed tortor enim mi
            imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras
            risus ultrices duis pharetra sit porttitor elementum sagittis
            elementum. Ut vitae blandit pulvinar fermentum in id sed. At
            pellentesque non semper eget egestas vulputate id volutpat quis.
            Dolor etiam sodales at elementum mattis nibh quam placerat ut.
            Suspendisse est adipiscing proin et. Leo nisl bibendum donec ac non
            eget euismod suscipit. At ultrices nullam ipsum tellus. Non dictum
            orci at tortor convallis tortor suspendisse. Ac duis senectus arcu
            nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi
            lectus.
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
