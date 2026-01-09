from playwright.sync_api import Page, expect, sync_playwright

def verify_landing_page(page: Page):
    """
    Verifies the Pealora landing page loads correctly and captures a screenshot.
    """
    # 1. Navigate to the page. Assumes local dev server is running on port 5173.
    page.goto("http://localhost:5173")

    # 2. Assert key elements are visible
    # Verify the Brand Name in Navbar
    brand = page.get_by_role("link", name="Pealora.")
    expect(brand).to_be_visible()

    # Verify the Hero Slogan
    slogan = page.get_by_role("heading", name="Pealora: Gifting Happiness")
    expect(slogan).to_be_visible()

    # Verify the CTA button
    shop_btn = page.get_by_role("link", name="Shop Collections")
    expect(shop_btn).to_be_visible()

    # 3. Take a screenshot
    page.screenshot(path="/home/jules/verification/verification.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_landing_page(page)
            print("Verification script completed successfully.")
        except Exception as e:
            print(f"Verification failed: {e}")
            # Take a screenshot on failure too for debugging
            try:
                page.screenshot(path="/home/jules/verification/verification_error.png")
            except:
                pass
        finally:
            browser.close()
