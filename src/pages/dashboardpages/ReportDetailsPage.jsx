import { ChevronLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const ReportDetailsPage = () => {
  const renderStarRating = (rating, totalReviews) => {
    return (
      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${
                star <= Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{rating.toFixed(2)}</span>
        </div>
        <span className="text-sm text-muted-foreground">
          {totalReviews} Reviews
        </span>
      </div>
    );
  };

  return (
    <div className="mx-auto  ">
      {/* Header */}
      <div className="bg-[#017783] text-white p-4 flex items-center gap-3 rounded-lg mb-6">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-medium">Reporter Details</h1>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - User Profiles */}
        <div className="space-y-6">
          {/* Reporter Profile (Pearlpoodlee) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Reporter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src="/placeholder.svg?height=80&width=80"
                    alt="Pearlpoodlee"
                  />
                  <AvatarFallback className="text-lg">PP</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Pearlpoodlee</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Email:
                      </span>{" "}
                      pearlpoodlee@gmail.com
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Phone:
                      </span>{" "}
                      9558349
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Address:
                      </span>{" "}
                      New York, USA
                    </p>
                  </div>
                  {renderStarRating(4.74, 17)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reported User Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Reported User</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src="/placeholder.svg?height=80&width=80"
                    alt="Jane Cooper"
                  />
                  <AvatarFallback className="text-lg">JC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Jane-cooper</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">
                        Email:
                      </span>{" "}
                      janecooper@gmail.com
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Phone:
                      </span>{" "}
                      9558349
                    </p>
                    <p>
                      <span className="font-medium text-foreground">
                        Address:
                      </span>{" "}
                      New York, USA
                    </p>
                  </div>
                  {renderStarRating(5.0, 45)}
                  <Link to={"/dashboard/reporteduserdetails"}>
                    <Button
                      className="mt-4 bg-[#017783] hover:bg-[#016570]"
                      size="sm"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Report Description */}
        <Card className="h-fit ">
          <CardHeader>
            <CardTitle className="text-xl">Report Description</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae
                orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend
                facilisis aliquet tempus morbi leo sagittis. Pellentesque odio
                amet turpis habitant. Imperdiet tincidunt nisl consectetur
                hendrerit accumsan vehicula imperdiet mollis. Neque a vitae diam
                pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc
                morbi elementum nisl rhoncus convallis orci enim tortor. Cursus
                a sed tortor enim mi imperdiet massa donec mauris. Sem morbi
                morbi posuere faucibus. Cras risus ultrices duis pharetra sit
                porttitor elementum sagittis elementum. Ut vitae blandit
                pulvinar fermentum in id sed.
              </p>
              <p>
                At pellentesque non semper eget egestas vulputate id volutpat
                quis. Dolor etiam sodales at elementum mattis nibh quam placerat
                ut. Suspendisse est adipiscing pran et. Leo nisl bibendum donec
                ac non eget euismod suscipit. At ultrices nullam ipsum tellus.
                Non dictum orci at tortor convallis tortor suspendisse. Ac duis
                senectus arcu nullam in suspendisse vitae. Tellus interdum enim
                lorem vel morbi lectus.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportDetailsPage;
