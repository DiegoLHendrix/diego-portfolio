from django.http import HttpResponse, HttpResponseForbidden
from django.conf import settings
from pathlib import Path
import logging
import mimetypes


# Create your views here.


# Set up logging for debugging
logger = logging.getLogger(__name__)


def index(request):
    return HttpResponse("Django backend root – nothing here!")


def secure_image_view(request, filename):
    referer = request.META.get("HTTP_REFERER", "")
    logger.info(f"Request for {filename} from referer: {referer}")

    # Optional referer check (can be hardened in production)
    if not referer or "localhost:5173" not in referer:
        logger.warning("Referer check skipped or invalid")

    # Resolve the full path safely to avoid traversal
    media_root = Path(settings.MEDIA_ROOT).resolve()
    requested_file = (media_root / "images" / filename).resolve()

    # Security check: ensure file is within allowed directory
    if not str(requested_file).startswith(str(media_root / "images")):
        logger.error(f"Unauthorized access attempt: {requested_file}")
        return HttpResponseForbidden("Access denied")

    # Check file existence and return with appropriate content type
    if requested_file.exists() and requested_file.is_file():
        content_type, _ = mimetypes.guess_type(str(requested_file))
        content_type = content_type or "application/octet-stream"
        with open(requested_file, "rb") as image_file:
            return HttpResponse(image_file.read(), content_type=content_type)

    logger.warning(f"Image not found: {requested_file}")
    return HttpResponse("Image not found", status=404)
