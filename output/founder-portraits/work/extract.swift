import Foundation
import Vision
import CoreImage
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
let input = URL(fileURLWithPath: args[1])
let output = URL(fileURLWithPath: args[2])
let handler = VNImageRequestHandler(url: input, options: [:])
let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.outputPixelFormat = kCVPixelFormatType_OneComponent8
try handler.perform([request])
guard let result = request.results?.first else { fatalError("No person mask returned") }
let mask = CIImage(cvPixelBuffer: result.pixelBuffer)
let context = CIContext(options: [.useSoftwareRenderer: false])
guard let image = context.createCGImage(mask, from: mask.extent),
      let dest = CGImageDestinationCreateWithURL(output as CFURL, UTType.png.identifier as CFString, 1, nil) else { fatalError("Could not export") }
CGImageDestinationAddImage(dest, image, nil)
CGImageDestinationFinalize(dest)
print("Mask saved: \(output.path), \(image.width)x\(image.height)")
